import categories from "./Categories";

interface Props {
  onSelectcategory: (category: string) => void;
}
const ExpenseListFilter = ({ onSelectcategory }: Props) => {
  return (
    <div>
      <select
        className="form-select"
        onChange={(event) => onSelectcategory(event.target.value)}
      >
        <option value="">All categories</option>
        {categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
    </div>
  );
};

export default ExpenseListFilter;
