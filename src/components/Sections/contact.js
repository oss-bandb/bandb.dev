import React from "react"

const Contact = () => {
  return (
    <section>
      <div>
        <div>
          <h2>Send us a message</h2>
        </div>
        <form novalidate id="sendForm" method="POST">
          <div>
            <div>
              <h2>Don't let your ideas be just ideas.</h2>
              <p>
                Want a new app from scratch, maybe a new feature or a bug fix in
                your existing app? Or just want to send us a friendly message?
                Don't hesitate to contact us.
              </p>
            </div>
            <div>
              <div>
                <div>
                  <input
                    type="text"
                    class="form-control"
                    name="name"
                    id="name"
                    placeholder="Name"
                    required
                  />
                  <div>Please enter your name.</div>
                  <div>Looks good!</div>
                </div>
                <div>
                  <input
                    type="email"
                    class="form-control"
                    name="email"
                    id="email"
                    placeholder="E-Mail"
                    required
                  />
                  <div>Please enter your E-Mail.</div>
                  <div>Looks good!</div>
                </div>
              </div>
              <div>
                <div>
                  <textarea
                    name="message"
                    id="message"
                    rows="10"
                    cols="30"
                    placeholder="Message"
                    required
                  ></textarea>
                  <div>Please enter your E-Mail.</div>
                  <div>Looks good!</div>
                </div>
              </div>
              <div>
                <button id="sendMessage" type="submit">
                  Send
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </section>
  )
}

export default Contact
