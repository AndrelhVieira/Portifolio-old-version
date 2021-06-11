import { Form, Input, Textarea } from "./styles";
import ButtonForm from "../ButtonForm";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import emailjs from "emailjs-com";

import { notify } from "react-notify-toast";

import { i18n } from "../../translate/i18n";

const schema = yup.object().shape({
  name: yup.string().required("O"),
  email: yup.string().email().required(),
  message: yup.string().required(),
});

const ContactForm = () => {
  const { register, handleSubmit } = useForm({
    resolver: yupResolver(schema),
  });

  const handleData = (data) => {
    emailjs
      .sendForm(
        "service_andreluizv",
        "template_nnykbgf",
        "#contactFormId",
        "user_3Pauod5UixvY1VTdz5FWv"
      )
      .then(
        (result) => {
          notify.show(i18n.t("contactForm.notify"), "success", 2500);
        },
        (error) => {
          notify.show(error, "warning", 2500);
        }
      );
  };

  return (
    <>
      <Form onSubmit={handleSubmit(handleData)} id="contactFormId">
        <Input
          name="name"
          placeholder={i18n.t("contactForm.name")}
          {...register("name")}
          autoComplete="off"
        />
        <Input
          name="email"
          {...register("email")}
          placeholder="Email"
          autoComplete="off"
        />
        <Textarea
          name="message"
          {...register("message")}
          placeholder={i18n.t("contactForm.message")}
          autoComplete="off"
          rows="5"
        />
        <ButtonForm type="submit">{i18n.t("contactForm.send")}</ButtonForm>
      </Form>
    </>
  );
};

export default ContactForm;
