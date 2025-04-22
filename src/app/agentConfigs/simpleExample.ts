import { AgentConfig } from "@/app/types";
import { injectTransferTools } from "./utils";

// Define general-purpose agents
const helper: AgentConfig = {
  name: "helper",
  publicDescription: "A helpful assistant for general questions.",
  instructions:
    "Ask the user what they need help with. Answer their question or provide guidance on the topic.",
  tools: [],
};

const infoBot: AgentConfig = {
  name: "infoBot",
  publicDescription: "Provides information on various topics.",
  instructions:
    "Ask the user what they want to know. Share relevant information or resources on the topic.",
  tools: [],
};

// Greeter agent updated to offer help or info
const greeter: AgentConfig = {
  name: "greeter",
  publicDescription: "Agent that greets the user.",
  instructions:
    "Greet the user and ask if they need help or information. If they want help, transfer them to the 'helper' agent. If they want information, transfer them to the 'infoBot' agent.",
  tools: [],
  downstreamAgents: [helper, infoBot],
};

// Add the transfer tool to point to downstreamAgents
const agents = injectTransferTools([greeter, helper, infoBot]);

export default agents;
