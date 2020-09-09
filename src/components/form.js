import React, { useState, forwardRef } from "react"
import styled from "styled-components"
import { useForm } from "react-hook-form"
import { useIntl } from "gatsby-plugin-intl"
import { theme, device } from "@styles"

const StyledContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`

const StyledForm = styled.form`
    min-width: 400px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 48px;

    @media screen and (${device.largeUp}) {
        & + & {
            margin-left: 16px;
        }
    }
`

const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;

    @media ${device.largeUp} {
        flex-direction: row;
    }
`

const StyledInput = styled.input`
    width: 100%;
    padding: 12px;
    border-radius: 4px;
    box-sizing: border-box;
    margin-top: 6px;
    margin-bottom: 16px;
    border: ${prop => (prop.invalid ? "2px solid red" : "0")};

    @media ${device.largeUp} {
        width: 50%;
        & + & {
            margin-left: 16px;
        }
    }
`

const StyledTextarea = styled.textarea`
    min-width: 400px;
    padding: 12px;
    border-radius: 4px;
    box-sizing: border-box;
    margin-top: 6px;
    margin-bottom: 16px;
    resize: vertical;

    border: ${prop => (prop.invalid ? "2px solid red" : "0")};
`

const StyledSubmit = styled.input`
    width: 100px;
    background-color: ${theme.primaryColor};
    font-size: 1.1em;
    color: white;
    padding: 12px 20px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    align-self: end;
`

const Form = forwardRef((_, ref) => {
    const { register, handleSubmit, errors } = useForm()
    const [formResult, setFormResult] = useState({})
    const intl = useIntl()

    const submitForm = (data, ev) => {
        ev.preventDefault()
        const form = ev.target
        const formData = new FormData(form)
        const xhr = new XMLHttpRequest()
        xhr.open(form.method, form.action)
        xhr.setRequestHeader("Accept", "application/json")
        xhr.onreadystatechange = () => {
            if (xhr.readyState !== XMLHttpRequest.DONE) return
            if (xhr.status === 200) {
                form.reset()
                setFormResult({ status: "SUCCESS" })
            } else {
                setFormResult({ status: "ERROR" })
            }
        }
        xhr.send(formData)
    }

    return (
        <StyledContainer>
            <StyledForm
                ref={ref}
                onSubmit={handleSubmit(submitForm)}
                action="https://formspree.io/mgenjbvp"
                method="post"
            >
                <Container>
                    <StyledInput
                        type="text"
                        name="name"
                        placeholder={intl.formatMessage({
                            id: "contact.placeholder.name",
                        })}
                        ref={register({ required: true })}
                        invalid={errors.name}
                    />
                    <StyledInput
                        type="email"
                        name="_replyto"
                        placeholder={intl.formatMessage({
                            id: "contact.placeholder.email",
                        })}
                        ref={register({ required: true })}
                        invalid={errors._replyto}
                    />
                </Container>
                <StyledTextarea
                    rows="10"
                    name="message"
                    placeholder={intl.formatMessage({
                        id: "contact.placeholder.message",
                    })}
                    ref={register({ required: true })}
                    invalid={errors.message}
                ></StyledTextarea>
                <StyledInput
                    type="hidden"
                    name="_subject"
                    id="email-subject"
                    value={intl.formatMessage({
                        id: "contact.subject",
                    })}
                />
                <StyledInput
                    type="hidden"
                    name="_gotcha"
                    style={{ display: "none" }}
                />

                {formResult.status === "SUCCESS" ? (
                    <p>
                        {intl.formatMessage({
                            id: "contact.success",
                        })}
                    </p>
                ) : (
                    <StyledSubmit
                        type="submit"
                        value={intl.formatMessage({ id: "contact.submit" })}
                    />
                )}
                {formResult.status === "ERROR" && (
                    <p>
                        {intl.formatMessage({
                            id: "contact.failure",
                        })}
                    </p>
                )}
            </StyledForm>
        </StyledContainer>
    )
})

export default Form
