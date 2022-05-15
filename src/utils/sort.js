import _ from "lodash";
const Sort = (header, items, orderType) => {
  const sortedItems = _.orderBy(items, header, orderType);
  return sortedItems;
};

export default Sort;
