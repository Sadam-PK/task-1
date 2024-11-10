const CustomInput = ({ ...props }) => {
  return (
    <div className="border rounded-lg w-[24vw] h-[6vh] outline-none overflow-hidden">
      <input {...props} className="w-full h-full p-2 outline-none" />
    </div>
  );
};

export default CustomInput;
