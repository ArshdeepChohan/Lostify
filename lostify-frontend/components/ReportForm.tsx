// components/ReportForm.tsx
import { useState } from 'react';

const ReportForm = () => {
  const [itemName, setItemName] = useState<string>('');
  const [itemDescription, setItemDescription] = useState<string>('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ itemName, itemDescription });
    // Add your form submission logic here
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="text"
        placeholder="Item Name"
        value={itemName}
        onChange={(e) => setItemName(e.target.value)}
        className="w-full p-3 border border-gray-300 rounded-lg"
      />
      <textarea
        placeholder="Item Description"
        value={itemDescription}
        onChange={(e) => setItemDescription(e.target.value)}
        className="w-full p-3 border border-gray-300 rounded-lg"
      />
      <button type="submit" className="w-full bg-blue-500 text-white py-3 rounded-lg">
        Report Item
      </button>
    </form>
  );
};

export default ReportForm;
