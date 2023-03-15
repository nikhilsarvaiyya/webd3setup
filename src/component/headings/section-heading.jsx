

export default function SectionHeading(props) {
  return (
    <div className="border-b-2 pb-2 mb-3 font-bold text-lg uppercase" >
      <span className="border-b-4 border-blue-300 pb-2">{props.heading}</span>
    </div>
  );
}