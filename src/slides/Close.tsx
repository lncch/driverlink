import PainList from '../components/PainList';
import { CLOSING } from '../content';

export default function Close() {
  return (
    <>
      <h2>Where this leaves us.</h2>
      <PainList items={CLOSING} />
    </>
  );
}
