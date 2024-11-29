let QuickAdd;

module.exports =  async function start(params) {
  QuickAdd = params;

  let clipBoardContents = await QuickAdd.quickAddApi.utility.getClipboard();
  const link = await QuickAdd.quickAddApi.inputPrompt(
    "Link: ", clipBoardContents, clipBoardContents
  );

  QuickAdd.variables = {
    link: link,
  };
}
