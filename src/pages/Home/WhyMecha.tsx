import SectionHeader from "../../components/shared/SectionHeader";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const WhyMecha = () => {
  return (
    <div className=" min-h-svh mt-20">
      <div className="m-10 md:flex md:justify-around md:items-center">
        <div className="md:w-1/2">
          <div className="mx-auto text-center">
            <SectionHeader title="Why Choose Mechanical Keyboard" description="" />
            <ul className="space-y-6">
              <li className="flex items-center">
                <div>
                  <Accordion>
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel2-content"
                      id="panel2-header"
                    >
                      <Typography>
                        <span className="text-yellow-400 text-2xl mr-4">
                          🔒
                        </span>
                        Durability
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography className="text-left">
                        Mechanical keyboards are built to last, with switches
                        rated for tens of millions of key presses, far
                        outlasting traditional keyboards.
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                </div>
              </li>
              <li className="flex items-center">
                <div>
                  <Accordion>
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel2-content"
                      id="panel2-header"
                    >
                      <Typography>
                        <span className="text-yellow-400 text-2xl mr-4">
                          🎨
                        </span>
                        Customization
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography className="text-left">
                        From keycaps to switches, mechanical keyboards offer
                        vast customization options, allowing users to
                        personalize their typing experience.
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                </div>
              </li>
              <li className="flex items-center">
                <div>
                  <Accordion>
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel2-content"
                      id="panel2-header"
                    >
                      <Typography>
                        <span className="text-yellow-400 text-2xl mr-4">
                          ⌨️
                        </span>
                        Superior Typing Experience
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography className="text-left">
                        Mechanical switches provide tactile feedback and
                        satisfying keypresses, enhancing both typing speed and
                        accuracy.
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                </div>
              </li>
              <li className="flex items-center">
                <div>
                  <Accordion>
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel2-content"
                      id="panel2-header"
                    >
                      <Typography>
                        <span className="text-yellow-400 text-2xl mr-4">
                          🎮
                        </span>
                        Enhance Gaming Performance
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography className="text-left">
                        Mechanical keyboards have faster response times and
                        anti-ghosting features, making them ideal for
                        competitive gaming.
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                </div>
              </li>
              <li className="flex items-center">
                <div>
                  <Accordion>
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel2-content"
                      id="panel2-header"
                    >
                      <Typography>
                        <span className="text-yellow-400 text-2xl mr-4">
                          🎯
                        </span>
                        Precision and Accuracy
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography className="text-left">
                        Each keystroke on a mechanical keyboard registers with
                        pinpoint accuracy, ensuring your input is never missed
                        during fast-paced tasks or intense gaming sessions.
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                </div>
              </li>
              <li className="flex items-center">
                <div>
                  <Accordion>
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel2-content"
                      id="panel2-header"
                    >
                      <Typography>
                        <span className="text-yellow-400 text-2xl mr-4">
                          🛠️
                        </span>
                        Repirability
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography className="text-left">
                        Unlike traditional keyboards, mechanical keyboards are
                        modular, making it easy to replace or upgrade individual
                        switches and keycaps without discarding the entire unit.
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="md:h-1/3 md:w-1/3">
          <img
            src="https://i.ibb.co.com/f1VG7bB/YUNZII-Keynovo-IF98-Pro-Tri-Mode-Wireless-Bluetooth-Hot-Swappable-Gasket-Mechanical-Gaming-Keyboard.jpg"
            alt=""
            className=" object-contain rounded-2xl"
          />
        </div>
      </div>
    </div>
  );
};

export default WhyMecha;

