import Fishbone from '../components/Fishbone';
import Expandable from '../components/Expandable';

export default function RootCause() {
  return (
    <>
      <h2>Six causes, one effect.</h2>
      <Expandable label="the fishbone diagram">
        <Fishbone />
      </Expandable>
    </>
  );
}
