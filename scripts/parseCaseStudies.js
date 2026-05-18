const fs = require('fs');
const path = require('path');
const cheerio = require('cheerio');

const caseStudiesDir = path.join(__dirname, '../../case-studies');
const outputFilePath = path.join(__dirname, '../src/data/caseStudies.ts');

const files = fs.readdirSync(caseStudiesDir).filter(f => f.endsWith('.html'));

const caseStudies = {};

files.forEach(file => {
  const slug = file.replace('.html', '');
  const html = fs.readFileSync(path.join(caseStudiesDir, file), 'utf8');
  const $ = cheerio.load(html);

  // Logo
  const logoSrc = $('.banner_logo').attr('src');
  const logo = logoSrc ? `/assets/${logoSrc}` : '';

  // Banner Right Image
  const bannerRightImgSrc = $('.banner_right_desktop_view img').attr('src') || $('.banner_right_mobile_view img').attr('src');
  const bannerImg = bannerRightImgSrc ? `/assets/${bannerRightImgSrc}` : '';

  // Title
  const title = $('.banner_left_box h2').text().trim();

  // Stats
  const stats = [];
  $('.banner_note_list li').each((i, el) => {
    const iconSrc = $(el).find('img').attr('src');
    const textHtml = $(el).find('p').html();
    if (textHtml) {
      stats.push({
        icon: iconSrc ? `/assets/${iconSrc}` : '',
        html: textHtml.trim()
      });
    }
  });

  // Platforms
  const platforms = [];
  $('.dev_platform_list_box li').each((i, el) => {
    const iconSrc = $(el).find('img').attr('src');
    const text = $(el).find('p').text().trim();
    if (text) {
      platforms.push({
        icon: iconSrc ? `/assets/${iconSrc}` : '',
        name: text
      });
    }
  });

  // Overview
  const overview = $('.overview_right_box').html()?.trim() || '';

  // Project Apps Image
  const projectAppsImgSrc = $('.project_apps_img').attr('src');
  const projectAppsImg = projectAppsImgSrc ? `/assets/${projectAppsImgSrc}` : '';

  // Problem & Goal
  const problem = $('.problemfaced_goal_left_box:contains("Problem")').parent().next().find('p').html()?.trim() || '';
  const goal = $('.problemfaced_goal_left_box:contains("Goal")').parent().next().find('p').html()?.trim() || '';

  // Solution
  const solutionHtml = $('.solution_goal_right_box').html()?.trim() || '';
  
  // App Screens
  const appScreens = [];
  $('#app_design .item img').each((i, el) => {
    const src = $(el).attr('src');
    if (src) {
      appScreens.push(`/assets/${src}`);
    }
  });

  // Technology
  const technology = [];
  $('.tech_dev_tool_list li').each((i, el) => {
    const iconSrc = $(el).find('img').attr('src');
    const name = $(el).find('p').text().trim();
    if (name) {
      technology.push({
        icon: iconSrc ? `/assets/${iconSrc}` : '',
        name
      });
    }
  });

  // Current Status
  const currentStatus = $('.tech_currstatus_right_box').html()?.trim() || '';

  caseStudies[slug] = {
    slug,
    logo,
    bannerImg,
    title,
    stats,
    platforms,
    overview,
    projectAppsImg,
    problem,
    goal,
    solutionHtml,
    appScreens,
    technology,
    currentStatus
  };
});

const tsCode = `export const caseStudies: Record<string, any> = ${JSON.stringify(caseStudies, null, 2)};\n`;

fs.writeFileSync(outputFilePath, tsCode);
console.log('Successfully generated src/data/caseStudies.ts');
