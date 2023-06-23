import styled from "styled-components";
import Input from "./components/Input";
import { json, redirect } from "react-router";
import { useDispatch } from "react-redux";
import { useractions } from "./Store";
import { useActionData } from "react-router";
const Contact = () => {
  const Wrapper = styled.section`
    padding: 9rem 0 5rem 0;
    text-align: center;
    .common-heading {
      margin-bottom: 20px;
      font-size: 30px;
    }
    .container {
      margin-top: 6rem;

      .contact-form {
        max-width: 50rem;
        margin: auto;

        .contact-inputs {
          display: flex;
          flex-direction: column;
          gap: 3rem;

          input[type="submit"] {
            cursor: pointer;
            transition: all 0.2s;

            &:hover {
              background-color: ${({ theme }) => theme.colors.white};
              border: 1px solid ${({ theme }) => theme.colors.btn};
              color: ${({ theme }) => theme.colors.btn};
              transform: scale(0.9);
            }
          }
        }
      }
    }
  `;

  return (
    <Wrapper>
      <h2 className="common-heading">Conatact Page </h2>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.856913853594!2d77.54088437496952!3d13.044778387277379!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3d48bda32bcf%3A0x9c75bfb03478bfe7!2sJalahalli%20Village%2C%20Jalahalli%2C%20Bengaluru%2C%20Karnataka%20560013!5e0!3m2!1sen!2sin!4v1686749275428!5m2!1sen!2sin"
        width="100%"
        height="300"
        style={{ border: 0 }}
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
      <Input />
    </Wrapper>
  );
};

export default Contact;
export async function submitAction({ request, params }) {
  const data = await request.formData();
  console.log(data);
  const contactDetails = {
    name: data.get("name"),
    email: data.get("email"),
    address: data.get("address"),
  };
  const response = await fetch(
    "https://elo-an-e-commerce-company-default-rtdb.firebaseio.com/users.json",
    {
      method: "POST",
      body: JSON.stringify(contactDetails),
    }
  );
  if (!response.ok) {
    throw new json({ message: "COULD NOT STORE DATA" }, { status: 401 });
  }
  return redirect("/");
}
