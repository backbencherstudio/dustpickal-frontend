import { Dialog, DialogContent, DialogHeader } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { PiWarningCircle } from "react-icons/pi";
import { FaRegTrashAlt } from "react-icons/fa";

export default function DeleteModal({
  isOpen,
  onClose,
  onConfirm,
  title = "Are you sure you want to delete this item?",
}) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className=" rounded-lg">
        <DialogHeader>
          <div className=" text-center flex justify-center mt-5">
            <div className="rounded-full bg-[#fdf4f5] p-3">
              <div className="bg-[#ef6471] text-gray-100 rounded-full p-5">
                <FaRegTrashAlt size={24} />
              </div>
            </div>
          </div>
          <div className="text-2xl font-medium text-center mt-12">{title}</div>
        </DialogHeader>
        <div className="flex justify-center gap-2 mt-8">
          <Button variant="outline" className="lg:w-48" onClick={onClose}>
            Cancel
          </Button>
          <Button
            variant="destructive"
            className="lg:w-48 bg-[#eb3d4d] hover:opacity-95"
            onClick={onConfirm}
          >
            Confirm Deletion
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
