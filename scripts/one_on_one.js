let QuickAdd;

module.exports =  async function start(params) {
  QuickAdd = params;

  let clipBoardContents = await QuickAdd.quickAddApi.utility.getClipboard();
  const person = await QuickAdd.quickAddApi.inputPrompt(
    "Person: ", clipBoardContents, clipBoardContents
  );

  QuickAdd.variables = {
    person: person,
  };
}
