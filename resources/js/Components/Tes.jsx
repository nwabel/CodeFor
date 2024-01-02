import React, { useState } from 'react';
import Select from 'react-select';

const options = [
  { value: 0, label: 'Angular' },
  { value: 1, label: 'Bootstrap' },
  { value: 2, label: 'React.js' },
  { value: 3, label: 'Vue.js' },
  { value: 4, label: 'Django' },
  { value: 5, label: 'Laravel' },
  { value: 6, label: 'Node.js' },
];

const Tes = () => {
  const [selectedValues, setSelectedValues] = useState([]);

  const handleChange = (selectedOptions) => {
    setSelectedValues(selectedOptions.map((option) => option.value));
  };

  const customStyles = {
    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isSelected ? 'blue' : 'white',
      color: state.isSelected ? 'white' : 'black',
    }),
  };

  return (
    <div className="container mx-auto  p-8 bg-white rounded-lg shadow-md">
      <h1 className="text-lg font-semibold mb-4">Select Options</h1>

      <div className="space-y-4">
        <div>
          <Select
            isMulti
            options={options}
            onChange={handleChange}
            value={options.filter((option) => selectedValues.includes(option.value))}
            styles={customStyles}
          />
        </div>

        <div>
          <div className="border p-4 rounded-md">
            <p className="font-bold mb-2">Selected:</p>
            <div className="flex flex-wrap">
              {selectedValues.map((value) => (
                <div
                  key={value}
                  className="bg-blue-500 text-white px-3 py-2 rounded-full mr-3 mb-2"
                >
                  {options.find((option) => option.value === value)?.label}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tes;
