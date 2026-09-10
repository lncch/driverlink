import PainList from '../components/PainList';
import { PROBLEM_PAINS } from '../content';

export default function Problem() {
  return (
    <>
      <h2>Two sides of the same market, and no place where they meet.</h2>
      <div className="quote">
        There is no single portal in Saudi Arabia for driver recruitment. The general job boards
        that exist carry almost no detail about the driver, and almost no detail about the employer.
      </div>
      <PainList items={PROBLEM_PAINS} />
    </>
  );
}
