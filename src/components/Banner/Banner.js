//variant: happy | sad
function Banner({ variant, children }) {
  return <div className={`${variant} banner`}>{children}</div>;
}

export default Banner;
