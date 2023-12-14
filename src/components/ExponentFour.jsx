const ExponentFour = ({ count }) => (
  <div className="exponent-counter-container">
    <p className="exponent-label">{count}⁴</p>
    <p className="exponent-result">2 * 2 * 2 * 2 = <span className="total">{Math.pow(count, 4)}</span></p>
  </div>
);

export default ExponentFour;