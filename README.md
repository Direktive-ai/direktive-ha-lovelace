<table>
  <tr>
    <td width="127"><img src="https://cdn.discordapp.com/icons/1397167613506748468/3647df6e0f15b5322003ce556a809e7a.png?size=160&quality=lossless" alt="LOGO" ></td>
    <td><h1>Direktive.ai - Lovelace Component</h1></td>
  </tr>
</table>
<table>
  <tr>
    <td width="250">
      <a aria-label="@DIREKTIVE-AI/HA-INTEGRATION" href="https://github.com/Direktive-ai/direktive-ha-integration" width="250">
        <img alt="" src="https://img.shields.io/badge/DIREKTIVE--AI/INTEGRATION-V0.9.0-blue?style=for-the-badge&labelColor=10131a&color=1EAEDB" align="center">
      </a>
    </td>
    <td width="250">
      <a aria-label="@IREKTIVE-AI/HA-LOVELACE" href="https://github.com/Direktive-ai/direktive-ha-lovlace">
        <img alt="" src="https://img.shields.io/badge/DIREKTIVE--AI/LOVELACE-V0.9.0-blue?style=for-the-badge&labelColor=10131a&color=1EAEDB" align="center">
      </a>
    </td>
    <td width="210">
      <a aria-label="Join the community on Discord" href="https://discord.gg/4M4ARJhz">
        <img alt="" src="https://img.shields.io/badge/Join%20the%20Discord-blueviolet.svg?style=for-the-badge&labelColor=10131a&logo=Discord&logoWidth=20&color=9b87f5" align="center">
      </a>
    </td>
  </tr>
</table>

## Simplify your [Home Assistant](https://www.home-assistant.io/) Automation creation
Our primary goal at Direktive.ai is to greatly simplify the creation of Home Assistant automations (called Direktives) by leveraging AI and creating an ecosystem that allows users to talk to their installation. With this we hope to:

##### Lower the entry barrier for Home Assistant adoption for new installations by simplifying interactions. Ultimately, lower the complexity for smart home adoption in the general population altogether

##### Allow anyone in the house to create new automations

##### Easier to create & manager automations = more automations = smarter houses

##### Create a solid foundation for new features and possibilities (currently in develoment), such as vision-powered automations, automation suggestion, etc

## What is this Component for?
The Lovelace Component is the user-friendly interface that allows you to easily create, view, manage, and interact with your directives directly from the Home Assistant dashboard. It simplifies the process of automating tasks and managing your smart home environment by providing a natural language interface to create complex automations.

This component works in conjunction with the [Direktive.ai Integration](https://github.com/Direktive-ai/direktive-ha-integration) to provide a comprehensive solution for enhancing your Home Assistant experience.

#### Our entire ecosystem has been designed with a seurity-first mindset. Check our <a href="https://direktive.ai/security">security section</a> in our website to understand better how we protect your data from everyone, including ourselves.

## Get Started

### Prerequisites
- A Home Assistant instance (version 2023.8 or later recommended)
- An account on [Direktive.ai](https://direktive.ai) (join our [Alpha track](https://direktive.ai/apply-for-alpha) for free access)
- [HACS](https://hacs.xyz/) installed (recommended) or manual installation capability
- The [Direktive.ai Integration](https://github.com/Direktive-ai/direktive-ha-integration) installed and configured

### Installation

#### HACS Installation
1. Make sure you have [HACS](https://hacs.xyz/) installed in your Home Assistant instance
2. Add this as a custom repository in HACS (Copy-paste this repository link and select "Dashboard")
3. Go to **HACS** → **Integrations** → **Add Integration**
4. Click the **+** button in the bottom right corner
5. Search for "Direktive Lovelace" and select it
6. Click **Download**
7. Restart Home Assistant

### Adding this to your Dashboard

#### Method 1: Using the Lovelace UI
1. Go to your Home Assistant dashboard
2. Click the **⋮** menu in the top right corner
3. Select **Edit Dashboard**
4. Click the **+** button to add a new card
5. Search for "Direktive Lovelace" in the card picker
6. Select it and configure the card

#### Method 2: Manual YAML Configuration
Add the following configuration to your Lovelace dashboard:

```yaml
type: custom:direktive-ha-lovelace
entity: sensor.direktive_lovelace
name: Direktive Lovelace Plugin
```

### Usage

#### Creating Your First Direktive
1. After installation, the component will appear in your dashboard
2. Simply describe what you want to happen in natural language
3. The component will communicate with Direktive.ai to create the appropriate automation
4. Your new directive will be created and can be managed through the interface

#### Example Commands
- "Turn on the living room lights when someone enters"
- "Close the blinds at sunset"
- "Turn off all lights when everyone leaves"
- "Notify me when the front door opens"

#### Managing Your Directives
- View all your active directives
- Edit existing directives by talking to them
- Delete directives you no longer need

### Getting Help
- Join our [Discord community](https://discord.gg/SsSvYbrp2J) for support
- Check our [documentation](https://direktive.ai/docs) for detailed guides
- Report issues on our [GitHub repository](https://github.com/Direktive-ai/direktive-ha-integration)

## FAQ

### Do I need to pay for this?
During the Alpha track, Direktive.ai is completely free. Apply for our [Alpha program](https://direktive.ai/apply-for-alpha) to get 100% discount during checkout.

### Is my data secure?
Yes, we take security seriously. All data is encrypted in transit and at rest. We use industry-standard security practices and regularly update our security measures. You can read more on our [security page](https://direktive.ai/security).

### Is there a risk of someone controlling my house?
No. You have complete control over which entities are exposed, and you can revoke access at any time. The integration only has access to the specific entities you choose to expose.

### Can I cancel this at any time?
Yes, you can cancel your subscription at any time. We offer a 30-day money-back guarantee if you're not satisfied with our service.

### What stage is this product on right now?
We're currently in Alpha stage, focusing on core functionality with a limited set of devices and entity types. Our main focus is on Lights, Shutters, Sensors, and Switches during this phase.

### What other features are we working on now?
We're developing vision-powered automations, automation suggestions, and expanding device support. Our roadmap includes more advanced AI capabilities and broader device compatibility.

## Website
Want to join our Alpha track before we go live? Check us out at [Direktive.ai](https://direktive.ai) or on our [Discord Channel](https://discord.gg/SsSvYbrp2J). Reach out for suggestions, questions, feature requests or bugs!

## Contributing
We welcome contributions! Please feel free to submit issues, feature requests, or pull requests to help improve this integration.

## License
This project is licensed under the MIT License - see the LICENSE file for details.