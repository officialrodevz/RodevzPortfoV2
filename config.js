// config.js
const projects = [
    {
        title: "[GAR]┃Star Wars: Roleplay",
        description: "My Current Game I'm Working On!",
        image: "https://i.imgur.com/63VGHL5.jpg",
        joinUrl: "https://www.roblox.com/games/14308020536/GAR-Star-Wars-Roleplay",
        detailedDescription: "My Current Game I'm Working On! I been working on for years and been updateing probly every few weeks!",
        additionalImages: [
            "https://i.imgur.com/63VGHL5.jpg"
        ]
    }
    // Add more projects here as needed
];

const staff = [
    {
        name: "OfficialRodevz",
        role: "Owner",
        avatarUrl: "https://i.imgur.com/4TU2cLz.png"
    },
    {
        name: "Legolas10156",
        role: "Modrator",
        avatarUrl: "https://i.imgur.com/hCI1n2x.png"
    },
    {
        name: "Royalguard1982",
        role: "Modrator",
        avatarUrl: "https://i.imgur.com/TC8xEpj.png"
    }
    // Add more staff members here as needed
];

const discordInviteUrl = "https://discord.gg/HJjk8tQW55"; // Replace with your Discord invite URL

// Make projects available globally
window.projects = projects;
window.staff = staff;
window.discordInviteUrl = discordInviteUrl;