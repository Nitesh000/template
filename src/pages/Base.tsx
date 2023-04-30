import Button from "../components/Button";

const Base = () => {
  return (
    <div className=" flex flex-col justify-center items-center mt-10 gap-5">
      {/* go to contact page */}
      {/* go to charts and maps page */}
      <Button label="Contact" goTo="contact" />
      <Button label="Charts" goTo="charts" />
      <Button label="Maps" goTo="maps" />
    </div>
  );
};

export default Base;
