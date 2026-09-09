import SignPanel from '../components/SignPanel';
import Fishbone from '../components/Fishbone';

export default function RootCause() {
  return (
    <>
      <SignPanel number={3} arabic="لماذا تحدث المشكلة؟" english="Why does it happen?" />
      <h2>Six causes, one effect.</h2>
      <Fishbone />
      <p className="lede" style={{ maxWidth: 'none' }}>
        The deepest cause sits in the middle two bones. The information a hiring decision needs,
        licence class, vehicle category, verified identity and real salary, is never captured in a
        structured, searchable form, so no channel can match on it.
      </p>
    </>
  );
}
