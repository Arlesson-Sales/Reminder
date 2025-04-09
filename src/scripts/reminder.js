/**
 * Essa função recebe como argumento um elemento HTML que é o container do reminder
 * onde estão a lista de itens fazendo assim a criação dos itens em formato de
 * objeto.
 * 
 * @param {HTMLDivElement} container container onde estão os componentes Itens desse reminder.
 * @returns {Array<Object>}
 */
export function createReminderItens(container)
{
    return [...container?.children].map(element => {
        return {
            name: element.lastChild.value,
            checked: element.firstChild.checked
        }
    });
}

/**
 * Essa função recebe como argumento um objeto que representa um reminder fazendo com
 * que seus itens sejam criados e ele seja salvo no local storage do navegador.
 * 
 * @param {Object} reminder Referencia ao objeto reminder.
 */
export function saveReminder(reminder)
{
    //Verificando se o reminder possui um container
    if (reminder.container)
    {
        reminder.itens = createReminderItens(reminder.container);
        delete reminder.container;
    }
        
    const reminders = JSON.parse(window.localStorage.getItem("reminders_data")) ?? { data: [] };
    reminders.data.unshift(reminder);
    window.localStorage.setItem("reminders_data", JSON.stringify(reminders));
}

/**
 * Essa função faz o carregamento de todos os lembretes adicionados posteriormente e salvos
 * no localStorage.
 * @returns {Array<Object>}
 */
export function loadReminders()
{
    const reminders = JSON.parse(window.localStorage.getItem("reminders_data")) ?? { data: [] };
    return reminders.data;
}