import { useEffect, useState } from "react";
import { contactType } from "../types";
import { useDispatch } from "react-redux";
import { contactAction, findContact } from "../store";
import { useNavigate, useParams } from "react-router-dom";

const EditContact = () => {
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [status, setStatus] = useState<boolean>(true);
  const dispatch = useDispatch();
  const { personId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const user = findContact(personId as string);
    setFirstName(user?.firstName as string);
    setLastName(user?.lastName as string);
    setStatus(user?.status as boolean);
  }, []);

  const formSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newContact: contactType = {
      id: personId as string,
      firstName,
      lastName,
      status,
    };
    dispatch(contactAction.updateContact(newContact));
    navigate("/contact");
  };

  return (
    <div className="flex w-full justify-center items-center">
      <form
        onSubmit={formSubmitHandler}
        className="flex flex-col -mt-32 border-darkBrown border-2 px-6 py-4 rounded-xl"
      >
        <h2 className="py-4 mx-auto px-2 text-2xl text-brick font-bold tracking-widest">
          Edit Contact
        </h2>
        <div className="grid grid-cols-5 py-1 items-center">
          <label
            className=" col-span-2 text-darkBrown font-semibold"
            htmlFor="fname"
          >
            First Name
          </label>
          <input
            className="col-span-3 focus:outline-none rounded-lg px-2 caret-brick text-brick"
            type="text"
            name="fname"
            id="fname"
            value={firstName}
            autoComplete="off"
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>
        <div className="grid grid-cols-5 py-1">
          <label
            className="col-span-2 text-darkBrown font-semibold"
            htmlFor="lname"
          >
            Last Name
          </label>
          <input
            className="col-span-3 focus:outline-none rounded-lg px-2 caret-brick text-brick"
            autoComplete="off"
            type="text"
            name="lname"
            id="lname"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
        {/* Radio button for status */}
        <div className="flex items-center py-1">
          <label className="font-semibold text-darkBrown" htmlFor="status">
            Status
          </label>
          <div className="flex flex-col m-auto">
            <div>
              <input
                className="peer/active checked:bg-green-700"
                type="radio"
                name="status"
                id="active"
                value="active"
                checked={status === true}
                onChange={() => setStatus(true)}
              />
              <label
                className="peer-checked/active:text-green-700"
                htmlFor="active"
              >
                Active
              </label>
            </div>
            <div>
              <input
                className="peer/inactive checked:bg-red-700"
                type="radio"
                name="status"
                id="inactive"
                value="inactive"
                checked={status === false}
                onChange={() => setStatus(false)}
              />
              <label
                className="peer-checked/inactive:text-red-700"
                htmlFor="inactive"
              >
                Inactive
              </label>
            </div>
          </div>
        </div>
        <button
          className="my-2 bg-brick w-36 mx-auto h-8 rounded-md hover:bg-brick/80 text-darkBrown"
          type="submit"
        >
          Save Contact
        </button>
      </form>
    </div>
  );
};

export default EditContact;
