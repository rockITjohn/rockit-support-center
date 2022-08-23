import OtherItem from "../../atoms/other-item/other-item";
import { useSelector } from "react-redux";

const OtherList = () => {
  const { otherList } = useSelector((state) => state.searchReducer);
  return (
    <div>
      {otherList.map((item) => (
        <div className="my-2">
          <OtherItem item={item} />
        </div>
      ))}
    </div>
  );
};

export default OtherList;
