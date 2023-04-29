import { useSelector } from "react-redux";
import Button from "../components/Button";
import { StoreState } from "../store";

const Contact = () => {
  const contacts = useSelector((state: StoreState) => state.contact);
  console.log(contacts);
  return (
    <div className="flex flex-col w-full h-full items-center pt-7">
      <div className="flex justify-start ">
        {contacts.length ? (
          contacts.map((contact) => (
            <div
              key={contact.id}
              className="flex flex-col h-[88px] w-[56px] border-2 border-brick/40 rounded-md items-center justify-center  mx-3"
            >
              <span>{contact.firstName}</span>
              <span>{contact.lastName}</span>
              <span>{contact.status ? "Active" : "Inactive"}</span>
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
