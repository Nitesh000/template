import { useNavigate } from "react-router-dom";
type Props = {
  label: string;
  goTo: string;
};

const Button = ({ label, goTo }: Props) => {
  const navigate = useNavigate();
  return (
    <button
      className="bg-darkBrown h-12 text-white px-5 py-2 rounded-md hover:bg-semiDarkBrown hover:drop-shadow-md hover:underline"
      onClick={() => navigate(`/${goTo}`)}
    >
      {label}
    </button>
  );
};

export default Button;
