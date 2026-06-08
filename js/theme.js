function changeTheme(theme) {
    const root = document.documentElement;

    if (theme === "dark") {
        root.style.setProperty("--bg-primary", "#081120");
        root.style.setProperty("--bg-secondary", "#11203A");
        root.style.setProperty("--color-blue", "#4DA8FF");
        root.style.setProperty("--color-text-primary", "#F4F7FB");
    }

    if (theme === "blue") {
        root.style.setProperty("--bg-primary", "#0A1F44");
        root.style.setProperty("--bg-secondary", "#123B7A");
        root.style.setProperty("--color-blue", "#00BFFF");
        root.style.setProperty("--color-text-primary", "#FFFFFF");
    }

    if (theme === "green") {
        root.style.setProperty("--bg-primary", "#0B2E13");
        root.style.setProperty("--bg-secondary", "#145A32");
        root.style.setProperty("--color-blue", "#2ECC71");
        root.style.setProperty("--color-text-primary", "#FFFFFF");
    }
}