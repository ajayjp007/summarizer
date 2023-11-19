interface ButtonProps {
  text: String;
}

const Button = (props: ButtonProps) => {
  return (
    <button className="text-white font-medium py-2 px-3 bg-green-600 rounded-lg tracking-wide shadow-md flex items-center gap-2">
      {props.text}
      <svg
        fill="#fff"
        width="14px"
        height="14px"
        viewBox="0 0 0.42 0.42"
        id="right"
        data-name="Flat Color"
        xmlns="http://www.w3.org/2000/svg"
        className="icon flat-color"
      >
        <path
          id="primary"
          d="m0.38 0.198 -0.123 -0.123a0.018 0.018 0 0 0 -0.025 0.025l0.093 0.093H0.053a0.018 0.018 0 0 0 0 0.035h0.273l-0.093 0.093a0.018 0.018 0 0 0 0 0.025 0.018 0.018 0 0 0 0.025 0l0.123 -0.123a0.018 0.018 0 0 0 0 -0.025Z"
          fill="#fff"
        />
      </svg>
    </button>
  );
};
export default Button;
