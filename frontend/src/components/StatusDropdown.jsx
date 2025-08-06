import React from 'react';

export default function StatusDropdown({ statusList, selectedStatusId, onChange }) {
  return (
    <select value={selectedStatusId} onChange={onChange}>
      <option value="">Select Status</option>
      {statusList.map((status) => (
        <option key={status.id} value={status.id}>
          {status.name}
        </option>
      ))}
    </select>
  );
}
