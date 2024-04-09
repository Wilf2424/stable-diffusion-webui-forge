// Custom scripts by XpucT
// Homepage: https://boosty.to/xpuct

document.addEventListener('keydown', function(e)
{
    // Показать предыдущую генерацию по клавише Shift
    if (e.keyCode === 16 && document.querySelector('.livePreview'))
        document.querySelector('.livePreview').style.display = 'none'

    // Переключить Mask Mode по Ctrl + F2
    else if (e.ctrlKey && e.code === 'F2')
    {
		const commonRadio = document.querySelector('#img2img_mask_mode').children[2]
        commonRadio.children[0].className.includes('selected') ? commonRadio.children[1].click() : commonRadio.children[0].click()

        e.preventDefault()
    }
	
	// Выгрузить модели по F4
	else if (e.code === 'F4')
    {
        document.querySelector('#sett_unload_sd_model').click()
        e.preventDefault()
    }

    // Reload UI по F2
    else if (e.code === 'F2')
    {
        document.querySelector('#settings_restart_gradio').click()
        e.preventDefault()
    }
})

document.addEventListener('keyup', function(e)
{
    if (e.keyCode === 16 && document.querySelector('.livePreview'))
    {
        document.querySelector('.livePreview').style.display = 'block'
    }
})

onUiLoaded(function()
{
    // Удаление рекламы в Photopea (работает не всегда)
    const result = document.evaluate("//div[@class='flexrow app']/div[2]", document, null, XPathResult.ANY_TYPE, null)
    var ad = result.iterateNext()
    while (ad)
    {
        ad.parentNode.removeChild(ad)
        ad = result.iterateNext()
    }


    // Граница в txt2img немного левее, а не посередине
    document.querySelector('gradio-app .resize-handle-row').style.gridTemplateColumns = '676px 16px 1fr'

    document.querySelectorAll('button[id$=_generate]').forEach((x) => x.addEventListener('mousedown', (e) =>
    {
        if (e.button === 1)
        {
            get_uiCurrentTabContent().querySelector('div[id$=_adetailer_ad_enable]').children[1].click()
            get_uiCurrentTabContent().querySelector('button[id$=_generate]').click()
            setTimeout(() => get_uiCurrentTabContent().querySelector('div[id$=_adetailer_ad_enable]').children[1].click(), 100)
            e.preventDefault()
        }
    }))
})