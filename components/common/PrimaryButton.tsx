interface Props {
  content: String;
  reverse: Boolean;
}

const PrimaryButton = (props: Props) => {
  return (
    <div>
      {props.reverse ? (
        <button className="border border-green-500 bg-white hover:bg-white text-green-500 primaryButton md:py-2.5 md:px-8 md:text-xl">
          {props.content}
        </button>
      ) : (
        <button className="bg-green-500 hover:bg-green-600 text-white primaryButton md:py-2.5 md:px-8 md:text-xl">
          {props.content}
        </button>
      )}
    </div>
  );
};
export default PrimaryButton;
