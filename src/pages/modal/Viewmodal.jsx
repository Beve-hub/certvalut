import { Outlet, useNavigate } from "react-router-dom";

const Viewmodal = ({ visible, onClose }) => {
const navigate = useNavigate(); // Add useNavigate hook
if (!visible) return null;

return (
  
<div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm  flex justify-center items-center">
<div className="bg-white p-8 rounded-md w-[30rem] ">
   <div className="flex justify-between items-center pb-8">
<p className="text-md font-semibold ">
Do you want to save and publish 4 credentials?
</p>
   </div>
   <div className="items-center">
   <p className="py-2">
   Please, be aware that Certifier is about to send out 3 emails with credentials and wallet address to your recipients.
   </p>
   <div className="flex gap-2 py-4">
   <input type="checkbox" className="rounded-full" />
   <p>I understand that this action is irreversible</p>
   </div>
   </div>
   <div className="flex gap-2 justify-end pt-8">
<button onClick={onClose} className="rounded-md border-2 py-2 px-4 text-sm">
Cancel
</button>
{/* Change Link to use navigate function */}
<button
onClick={() => navigate("/History")}
className="text-sm border rounded-md bg-[blue] text-white py-2 px-4"
>
Send
</button>
   </div>
</div>
<Outlet />
</div>
);
};

export default Viewmodal;





