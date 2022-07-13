import React, { useState, useEffect } from "react"
import axios from "axios"

const Message = () => {
  const [firstname, setFirstname] = useState("")

  const [lastname, setLastname] = useState("")
  const [email, setEmail] = useState("")
  const [isSaving, setIsSaving] = useState(false)

  const url = `${appLocalizer.apiURL}/web3/v1/settings`

  // request headers
  const options = {
    header: {
      "Content-Type": "application/json",
      "X-WP-NONCE": appLocalizer.nonce,
    },
  }

  const submitFormFields = async (e) => {
    e.preventDefault()
    setIsSaving(true)

    // saving our values in DB with post request
    const res = await axios.post(url, { firstname, lastname, email }, options)
    if (!!res) {
      setIsSaving(false)
    }
  }

  // check for the already stored values - if any the pre-populate the form fields.

  useEffect(() => {
    const getSettings = async () => {
      const res = await axios.get(url)
      // update the state with these values
      console.log({ res })
      setFirstname(res.data.firstname)
      setLastname(res.data.lastname)
      setEmail(res.data.email)
    }
    getSettings()
  }, [])

  return (
    <div>
      <h2>Have a query?</h2>
      <textarea
        id="message"
        name="message"
        rows="3"
        cols="50"
        placeholder="your messsage"
      />
    </div>
  )
}

export default Message
