import { Download } from "lucide-react";
import { Button } from "../ui/button";

const ResumeButton = () => {
    return (
        <a
            href="/sufian_resume.pdf"
            download
        >
            <Button className="rounded-full border-2 border-primary text-[#d5d5d5] bg-transparent hover:bg-primary"><Download strokeWidth={2} />Resume</Button>
        </a>
    );
};

export default ResumeButton;