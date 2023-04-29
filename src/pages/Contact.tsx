import { useDispatch, useSelector } from "react-redux";
import Button from "../components/Button";
import { StoreState, contactAction } from "../store";
import { useNavigate } from "react-router-dom";

const Contact = () => {
  const contacts = useSelector((state: StoreState) => state.contact);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  console.log(contacts);

  return (
    <div className="flex flex-col w-full h-full items-center pt-7">
      <div className="flex justify-start ">
        {contacts.length ? (
          contacts.map((contact) => (
            <div
              key={contact.id}
              className="flex flex-col h-52 w-60 border-2 border-brick/40 rounded-md items-center justify-center  mx-3"
            >
              <span className="font-semibold text-darkBrown tracking-wide">
                {contact.firstName}
              </span>
              <span className="font-semibold text-darkBrown tracking-wide">
                {contact.lastName}
              </span>
              <span
                className={
                  "font-semibold tracking-wide " +
                  `${contact.status ? "text-green-700" : "text-red-700"}`
                }
              >
                {contact.status ? "Active" : "Inactive"}
              </span>
              <div className="flex flex-col gap-2 pt-2">
                <button
                  onClick={() => navigate(`/contact/${contact.id}`)}
                  className="bg-green-400 rounded-md hover:bg-green-500 w-20"
                >
                  Edit
                </button>
                <button
                  onClick={() =>
                    dispatch(contactAction.removeContact(contact.id))
                  }
                  className="bg-red-400 rounded-md hover:bg-red-500 w-20"
                >
                  Delete
                </button>
              </div>
            </div>
          ))
        ) : (
          <span className="text-2xl text-brick font-bold ">
            No Contacts please add one
          </span>
        )}
      </div>
      <div className="mt-10 mx-auto">
        <Button label="+ Create New Contact" goTo="contact/create" />
      </div>
    </div>
  );
};

export default Contact;
