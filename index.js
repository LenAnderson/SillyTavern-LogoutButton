const drawer = document.createElement('div'); {
    drawer.id = 'stlb--logoutButton';
    drawer.classList.add('drawer');
    const btn = document.createElement('div'); {
        btn.classList.add('drawer-toggle', 'drawer-header');
        const icon = document.createElement('div'); {
            icon.classList.add('drawer-icon', 'fa-solid', 'fa-right-from-bracket', 'closedIcon');
            icon.title = 'Logout';
            icon.addEventListener('click', ()=>document.querySelector('#logout_button').click());
            btn.append(icon);
        }
        drawer.append(btn);
    }
    document.querySelector('#top-settings-holder').append(drawer);
}
