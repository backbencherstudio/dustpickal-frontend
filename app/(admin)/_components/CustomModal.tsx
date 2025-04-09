import { Dialog, DialogContent, DialogHeader } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { FaRegTrashAlt } from "react-icons/fa";
import { IoCheckmarkDoneCircle, IoDocumentOutline, IoCheckmarkCircle } from "react-icons/io5";
import { CiCirclePlus } from "react-icons/ci";
export default function CustomModal({
  isOpen,
  onClose,
  onConfirm,
  title,
  type,
}) {
  const dialogConfigs = {
    delete: {
      bgColor: "bg-[#fdf4f5]",
      iconBgColor: "bg-[#ef6471]",
      icon: <FaRegTrashAlt className="text-4xl" />,
      buttonText: "Delete",
      buttonColor: "bg-[#ef6471]",
      defaultTitle: "Are you sure you want to delete this item?",
    },
    update: {
      bgColor: "bg-[#f0f0f0]",
      iconBgColor: "bg-black",
      icon: <IoCheckmarkDoneCircle className="text-4xl" />,
      buttonText: "Yes, Update",
      buttonColor: "bg-black",
      defaultTitle: "Confirm update?",
    },
    add: {
      bgColor: "bg-[#f0f0f0]",
      iconBgColor: "bg-black",
      icon: <CiCirclePlus className="text-4xl" />,
      buttonText: "Yes, Add",
      buttonColor: "bg-black",
      defaultTitle: "Are you sure you want to add this rule?",
    },
    draft: {
      bgColor: "bg-[#f0f0f0]",
      iconBgColor: "bg-black",
      icon: <IoDocumentOutline className="text-4xl" />,
      buttonText: "Yes, Save as draft",
      buttonColor: "bg-black",
      defaultTitle: "Are you sure you want to save this rule as draft?",
    },
    success: {
      bgColor: "bg-[#f0f0f0]",
      iconBgColor: "bg-[#22CAAD]",
      icon: <IoCheckmarkCircle className="text-4xl" />,
      buttonText: "Home",
      buttonColor: "bg-black",
      defaultTitle: "Payment method added successfully!",
    },
  };

  const config = dialogConfigs[type] || dialogConfigs.delete;
  const dialogTitle = title || config.defaultTitle;
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className=" rounded-lg">
        <DialogHeader>
          <div className="text-center flex justify-center mt-5">
            <div className={`rounded-full ${config.bgColor} p-3`}>
              <div
                className={`${config.iconBgColor} text-gray-100 rounded-full p-5`}
              >
                {config.icon}
              </div>
            </div>
          </div>
          <div className="text-2xl font-medium text-center mt-12">
            {dialogTitle}
          </div>
        </DialogHeader>
        <div className="flex justify-center gap-2 mt-8">
          <Button variant="outline" className="lg:w-48" onClick={onClose}>
            Cancel
          </Button>
          <Button
            className={`lg:w-48 ${config.buttonColor} hover:${config.buttonColor} hover:opacity-85`}
            onClick={onConfirm}
          >
            {config.buttonText}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
