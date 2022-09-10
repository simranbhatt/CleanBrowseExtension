async function closeOldTabs() {
    const queryOptions = { active: false };
    const tabs = await chrome.tabs.query(queryOptions);
    const tabIds = tabs.map(tab => tab.id);
    let message = tabIds.length == 1 ? "Closed 1 tab" : "Closed " + tabIds.length + " tabs";
    document.getElementById("print").innerHTML = message;
    chrome.tabs.remove(tabIds);
  }
  

  closeOldTabs();