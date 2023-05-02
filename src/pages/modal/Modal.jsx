import { Outlet, useNavigate } from "react-router-dom";

const Modal = ({ visible, onClose }) => {
const navigate = useNavigate(); // Add useNavigate hook
if (!visible) return null;

return (
  
<div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm  flex justify-center items-center">
<div className="bg-white p-8 rounded-md">
<div className="flex justify-between items-center pb-8">
<p className="text-md font-semibold ">
Select a Select a design of recipients
</p>
<button onClick={onClose}>X</button>
</div>
<div className="grid pb-4">
<label>Design name</label>
<select className="border-2 rounded-sm mt-1">
<option></option>
</select>
</div>
<div className="items-center">
<p className="py-2">
How would you like to add recipient details?
</p>
<div className="flex gap-2 py-1">
<input type="checkbox" className="rounded-full" />
<p>I would like to add the recipient details manually, one by one</p>
</div>
<div className="flex py-6 gap-2">
<input type="checkbox" className="rounded-full" />
<p>I would like to upload a spreadsheet with a list of recipients</p>
</div>
<div className="flex gap-2 pb-8">
<input type="checkbox" className="rounded-full" />
<p>
I have the right to use the personal data of these recipients
</p>
</div>
</div>
<div className="flex gap-2 justify-end">
<button onClick={onClose} className="border-2 py-2 px-4 text-sm">
Cancel
</button>
{/* Change Link to use navigate function */}
<button
onClick={() => navigate("/csvpage")}
className="text-sm border bg-[blue] text-white py-2 px-4"
>
Add Recipients
</button>
</div>
</div>
<Outlet />
</div>
);
};

export default Modal;





