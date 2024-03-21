import React from 'react';

export default function SelectRole() {
  return (
    <>
      <label for="role">Choose your role:</label>
      <select name="role" id="role">
        <option value="user">User</option>
        <option value="admin">Admin</option>
      </select>
    </>
  );
}
