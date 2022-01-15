import React from "react"
import SimpleReactValidator from "simple-react-validator"
import { navigate } from "gatsby-link"

function encode(data) {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&")
}

export default class ContactForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: "",
      email: "",
      telephone: "",
    }
    this.validator = new SimpleReactValidator({
      className:
        "absolute z-20 uppercase tracking-wider top-0 right-0 text-2xs text-white bg-red-800 leading-none mt-1 p-1 px-2",
      messages: {
        default: "Required",
      },
    })
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleSubmit = (e) => {
    if (this.validator.allValid()) {
      const form = e.target
      this.setState({
        submitting: true,
      })

      fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({
          "form-name": form.getAttribute("name"),
          ...this.state,
        }),
      })
        .then(() => navigate(form.getAttribute("action")))
        .catch((error) => alert(error))
    } else {
      this.validator.showMessages()
      this.forceUpdate()
    }
    e.preventDefault()
  }

  render() {
    return (
      <form
        className="text-black form"
        name="quick-contact"
        method="post"
        action="/thanks/"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        onSubmit={this.handleSubmit}
      >
        <input type="hidden" name="form-name" value="contact" />
        <label className="hidden">
          Do not fill this in
          <input name="bot-field" />
        </label>
        <div className="flex flex-col gap-4">
          <div className="flex flex-col flex-1 gap-4 md:flex-row">
            <label className="relative flex w-full p-1">
              <input
                className="flex-grow p-4 text-sm text-gray-800 placeholder-gray-500 rounded-lg bg-grenadier-300"
                placeholder="Name *"
                type="text"
                name="name"
                onChange={this.handleChange}
              />
              {this.validator.message("name", this.state.name, "required")}
            </label>
            <label className="relative flex w-full p-1">
              <input
                className="flex-grow p-4 text-sm text-gray-800 placeholder-gray-500 rounded-lg bg-grenadier-300"
                placeholder="Email or telephone *"
                type="text"
                name="email_telephone"
                onChange={this.handleChange}
              />
              {this.validator.message(
                "email_telephone",
                this.state.email_telephone,
                "required"
              )}
            </label>
          </div>
          <label className="relative flex flex-1 p-1">
            <textarea
              className="flex-grow p-4 text-sm text-gray-800 placeholder-gray-500 rounded-lg bg-grenadier-300 min-h-[170px]"
              placeholder="Details *"
              type="text"
              name="details"
              onChange={this.handleChange}
            ></textarea>
            {this.validator.message(
              "details",
              this.state.details,
              "required"
            )}
          </label>
          <span className="flex flex-1 p-1 max-w-100">
            <button
              className="w-full p-0 text-white transition duration-1000 rounded-lg bg-grenadier-900 hover:bg-gray-800 focus:bg-gray-800"
              type="submit"
            >
              <span className="block p-2 whitespace-no-wrap">
                Send
              </span>
            </button>
          </span>
        </div>
      </form>
    )
  }
}
