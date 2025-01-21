import circlePlusSrc from '@/assets/icons/circle-plus.svg';
import { Dropdown } from '../ui/Dropdown';

const options = [
  { label: 'Add new item', value: 'add-new-item' },
  { label: 'Add new category', value: 'add-new-category' },
];

export const AddDropdown = () => {
  return (
    <Dropdown
      onOptionSelect={(value) => console.log(value)}
      options={options}
      triggerIcon={circlePlusSrc}
      triggerLabel='Add'
    ></Dropdown>
  );
};
