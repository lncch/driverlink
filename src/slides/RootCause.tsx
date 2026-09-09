import Eyebrow from '../components/Eyebrow';
import Fishbone from '../components/Fishbone';

export default function RootCause() {
  return (
    <>
      <Eyebrow step="02 / ROOT CAUSE" rubric="Rubric 1 · Fishbone" arabic="لماذا تحدث المشكلة؟" />
      <h2>Why does it happen? Six causes, one effect.</h2>
      <Fishbone />
      <p className="lede" style={{ maxWidth: 'none' }}>
        The deepest cause sits in the middle two bones: the information a hiring decision needs
        (licence class, vehicle category, verified identity, real salary) is never captured in a
        structured, searchable form, so no channel can match on it.
      </p>
    </>
  );
}
