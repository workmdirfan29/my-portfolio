import { RxCross2 } from "react-icons/rx";
import mine from "../../assets/Mine_.jpeg";

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const resumePath = "/Irfan.pdf";

const ResumeModal = ({ isOpen, onClose }: ResumeModalProps) => {
  if (!isOpen) return null;

  return (
    <div
      className="
        fixed inset-0 z-100
        flex items-center justify-center
        bg-black/80
        p-0
        backdrop-blur-md
        sm:p-4
        md:p-6
      "
      onClick={onClose}
    >
      <div
        className="
          relative
          flex
          h-full
          w-full
          flex-col
          overflow-hidden
          bg-bg-secondary
          shadow-2xl

          sm:h-[95vh]
          sm:max-w-3xl
          sm:rounded-2xl

          lg:max-w-6xl
          lg:flex-row
        "
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="
            absolute
            right-3
            top-3
            z-30
            flex
            h-9
            w-9
            items-center
            justify-center
            rounded-full
            border
            border-white/10
            bg-black/70
            text-xl
            text-white
            backdrop-blur-md
            transition-all
            duration-300
            hover:bg-secondary
          "
          aria-label="Close resume"
        >
          <RxCross2 />
        </button>

        {/* PDF Preview */}
        <div
          className="
            min-h-0
            flex-1
            bg-neutral-900
            lg:w-[75%]
            lg:flex-none
          "
        >
          <iframe
            src={resumePath}
            title="Md Irfan Resume Preview"
            className="h-full w-full border-0"
          />
        </div>

        {/* Resume Info */}
        <div
          className="
            flex
            w-full
            shrink-0
            items-center
            gap-4
            border-t
            border-white/10
            bg-bg-secondary
            p-4

            sm:p-6

            lg:w-[25%]
            lg:flex-col
            lg:items-start
            lg:justify-center
            lg:border-l
            lg:border-t-0
            lg:p-8
          "
        >
          {/* Profile Image */}
          <div
            className="
              h-16
              w-16
              shrink-0
              overflow-hidden
              rounded-full
              border
              border-white/10

              sm:h-20
              sm:w-20

              lg:mb-6
              lg:h-[clamp(9rem,15vw,12rem)]
              lg:w-[clamp(9rem,15vw,12rem)]
            "
          >
            <img
              src={mine}
              alt="Md Irfan"
              className="h-full w-full rounded-full object-cover"
            />
          </div>

          {/* Text */}
          <div className="min-w-0 flex-1 lg:flex-none">
            <h2 className="mt-1 text-lg font-medium uppercase text-primary sm:text-2xl">
              Md Irfan
            </h2>

            <p className="mt-1 hidden text-sm leading-relaxed text-text-muted sm:block">
              Have a look at my resume or download a copy.
            </p>
          </div>

          {/* Download */}
          <a
            href={resumePath}
            download="Irfan-Resume.pdf"
            className="
              shrink-0
              rounded-full
              bg-secondary
              px-4
              py-2.5
              text-xs
              font-medium
              text-white
              transition-all
              duration-300
              hover:scale-[1.02]
              hover:opacity-90

              sm:px-6
              sm:py-3
              sm:text-sm

              lg:mt-6
              lg:w-full
            "
          >
            Download
          </a>
        </div>
      </div>
    </div>
  );
};

export default ResumeModal;
