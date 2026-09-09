import SignPanel from '../components/SignPanel';
import Fishbone from '../components/Fishbone';
import Expandable from '../components/Expandable';

export default function RootCause() {
  return (
    <>
      <SignPanel number={3} arabic="لماذا تحدث المشكلة؟" english="Why does it happen?" />
      <h2>Six causes, one effect.</h2>
      <Expandable label="the fishbone diagram">
        <Fishbone />
      </Expandable>
    </>
  );
}
