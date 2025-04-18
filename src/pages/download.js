import React, { useEffect, useState } from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Translate, { translate } from '@docusaurus/Translate';
import clsx from 'clsx';

import styles from './download.module.css';
import { 
  CalendarIcon, 
  DownloadIcon, 
  FileIcon, 
  LoadingSpinnerIcon, 
  ErrorIcon, 
  EmptyIcon, 
  GitHubIcon, 
  NoFilesIcon, 
  BuildIcon, 
  ArrowRightIcon, 
  StableIcon, 
  PreviewIcon, 
  AllVersionsIcon,
  RefreshIcon
} from '../components/DownloadIcons';

function Banner() {
  return (
    <div className={styles.banner}>
      <div className={styles.bannerContent}>
        <h1 className={styles.bannerTitle}>
          <Translate>下载 Invero</Translate>
        </h1>
        <p className={styles.bannerSubtitle}>
          <Translate>获取最新版本的 Invero 插件，开始创建你的自定义界面</Translate>
        </p>
      </div>
    </div>
  );
}

function FileCard({ asset }) {
  return (
    <div className={styles.fileCard}>
      <div className={styles.fileIcon}>
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={styles.fileIconSvg}>
          <path d="M13 2H6C4.89543 2 4 2.89543 4 4V20C4 21.1046 4.89543 22 6 22H18C19.1046 22 20 21.1046 20 20V9M13 2L20 9M13 2V9H20M12 18V12M9 15H15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
      <div className={styles.fileInfo}>
        <div className={styles.fileName}>{asset.name}</div>
        <div className={styles.fileSize}>{(asset.size / 1024 / 1024).toFixed(2)} MB</div>
      </div>
      <a 
        href={asset.browser_download_url} 
        className={styles.downloadButton}
        download
        target="_blank"
        rel="noopener noreferrer"
      >
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={styles.downloadIcon}>
          <path d="M12 15L12 3M12 15L8 11M12 15L16 11M21 15V17C21 18.1046 20.1046 19 19 19H5C3.89543 19 3 18.1046 3 17V15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </a>
    </div>
  );
}

function ReleaseCard({ release }) {
  const date = new Date(release.published_at).toLocaleDateString();
  const assets = release.assets || [];
  const jarAssets = assets.filter(asset => asset.name.endsWith('.jar'));
  
  return (
    <div className={styles.releaseCard}>
      <div className={styles.releaseHead}>
        <div className={styles.releaseDetails}>
          <div className={styles.releaseName}>{release.name || release.tag_name}</div>
          <div className={styles.releaseInfo}>
            <div className={styles.releaseDate}>
              <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className={styles.releaseDateIcon}>
                <path d="M6 5V1M14 5V1M5 9H15M19 7V19C19 20.1046 18.1046 21 17 21H3C1.89543 21 1 20.1046 1 19V7C1 5.89543 1.89543 5 3 5H17C18.1046 5 19 5.89543 19 7Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              {date}
            </div>
            <div 
              className={clsx(
                styles.releaseType, 
                release.prerelease ? styles.prereleaseType : styles.stableType
              )}
            >
              {release.prerelease ? 
                <Translate>预览版</Translate> : 
                <Translate>稳定版</Translate>
              }
            </div>
          </div>
        </div>
        <div className={styles.releaseActions}>
          <a
            href={release.html_url}
            className={styles.viewDetailsLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Translate>查看详情</Translate>
          </a>
        </div>
      </div>
      
      {jarAssets.length > 0 && (
        <div className={styles.releaseFiles}>
          {jarAssets.map(asset => (
            <FileCard key={asset.id} asset={asset} />
          ))}
        </div>
      )}
      
      {jarAssets.length === 0 && (
        <div className={styles.noFiles}>
          <div className={styles.noFilesIcon}>
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M20 6H12L10 4H4C2.89 4 2 4.89 2 6V18C2 19.11 2.89 20 4 20H20C21.11 20 22 19.11 22 18V8C22 6.89 21.11 6 20 6ZM20 18H4V6H9.17L11.17 8H20V18ZM12 14H14V16H16V14H18V12H16V10H14V12H12V14Z" fill="currentColor" />
            </svg>
          </div>
          <div className={styles.noFilesText}>
            <Translate>该版本没有可用的下载文件</Translate>
          </div>
          <a 
            href={release.zipball_url} 
            className={styles.sourceCodeLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Translate>下载源代码</Translate>
            <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className={styles.sourceCodeIcon}>
              <path d="M7 10L5 8M5 8L7 6M5 8H15M13 14L15 16M15 16L17 14M15 16V6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>
      )}
    </div>
  );
}

function DevelopmentBuildCard() {
  const [builds, setBuilds] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [expanded, setExpanded] = useState(false);

  const fetchBuilds = async () => {
    setIsLoading(true);
    setError(null);
    
    try {
      // 尝试直接使用GitHub API获取构建信息
      const response = await fetch('https://api.github.com/repos/8aka-Team/Invero/actions/runs?per_page=10');
      
      if (!response.ok) {
        throw new Error('获取GitHub Actions数据失败');
      }
      
      const data = await response.json();
      
      // 过滤出工作流名称包含"Plugin Build"的构建
      const pluginBuilds = data.workflow_runs
        .filter(run => run.name && run.name.includes('Plugin Build'))
        .slice(0, 5)
        .map(run => ({
          id: run.id,
          name: run.name || `构建 #${run.run_number}`,
          number: run.run_number,
          branch: run.head_branch || 'unknown',
          date: new Date(run.created_at).toLocaleDateString(),
          status: run.conclusion || 'pending',
          downloadUrl: `https://github.com/8aka-Team/Invero/actions/runs/${run.id}`
        }));
      
      setBuilds(pluginBuilds);
      
      if (pluginBuilds.length === 0) {
        // 如果没有找到构建，添加示例数据
        const exampleBuilds = [
          {
            id: 'example1',
            name: 'Plugin Build (示例)',
            number: '41',
            branch: 'main',
            date: new Date().toLocaleDateString(),
            status: 'success',
            downloadUrl: 'https://github.com/8aka-Team/Invero/actions'
          },
          {
            id: 'example2',
            name: 'Plugin Build (示例)',
            number: '40',
            branch: 'dev',
            date: new Date().toLocaleDateString(),
            status: 'success',
            downloadUrl: 'https://github.com/8aka-Team/Invero/actions'
          }
        ];
        setBuilds(exampleBuilds);
        setError('注意：这是示例数据。由于API限制，请点击"查看详情"前往GitHub获取实际构建。');
      }
    } catch (err) {
      console.error('GitHub API请求失败:', err);
      
      // 备用方案：提供示例数据和指引
      const exampleBuilds = [
        {
          id: 'example1',
          name: 'Plugin Build (示例)',
          number: '41',
          branch: 'main',
          date: new Date().toLocaleDateString(),
          status: 'success',
          downloadUrl: 'https://github.com/8aka-Team/Invero/actions'
        },
        {
          id: 'example2',
          name: 'Plugin Build (示例)',
          number: '40',
          branch: 'dev',
          date: new Date().toLocaleDateString(),
          status: 'success',
          downloadUrl: 'https://github.com/8aka-Team/Invero/actions'
        }
      ];
      setBuilds(exampleBuilds);
      setError('由于GitHub API限制，无法获取实时数据。请点击"查看详情"前往GitHub获取最新构建。');
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (expanded) {
      fetchBuilds();
    }
  }, [expanded]);

  return (
    <div className={styles.devBuildCard}>
      <div className={styles.devBuildContent}>
        <div className={styles.devBuildHeader}>
          <div className={styles.devBuildIcon}>
            <BuildIcon />
          </div>
          <div className={styles.devBuildTitle}>
            <Translate>开发版构建</Translate>
          </div>
        </div>
        <p className={styles.devBuildDescription}>
          <Translate>
            如果你需要最新的开发版构建，可以访问我们的 GitHub Actions 页面获取最新构建。
            开发版包含最新功能，但可能存在稳定性问题。
          </Translate>
        </p>
        
        {!expanded ? (
          <button 
            className={styles.actionButton}
            onClick={() => setExpanded(true)}
          >
            <Translate>查看最近构建</Translate>
            <ArrowRightIcon className={styles.actionButtonIcon} />
          </button>
        ) : (
          <div className={styles.devBuildList}>
            <div className={styles.devBuildListHeader}>
              <h3 className={styles.devBuildListTitle}>
                <Translate>最近的构建</Translate>
              </h3>
              <button 
                className={styles.refreshButton}
                onClick={fetchBuilds}
                disabled={isLoading}
              >
                <RefreshIcon className={clsx(styles.refreshIcon, isLoading && styles.rotating)} />
              </button>
            </div>
            
            {isLoading ? (
              <div className={styles.devBuildLoading}>
                <LoadingSpinnerIcon />
                <p><Translate>正在获取构建信息...</Translate></p>
              </div>
            ) : error ? (
              <div className={styles.devBuildWarning}>
                <div className={styles.buildsContainer}>
                  {builds.map(build => (
                    <div key={build.id} className={styles.buildItem}>
                      <div className={styles.buildHeader}>
                        <div className={styles.buildInfo}>
                          <div className={styles.buildName}>
                            {build.name} #{build.number}
                          </div>
                          <div className={styles.buildMeta}>
                            <span className={styles.buildBranch}>{build.branch}</span>
                            <span className={styles.buildDate}>
                              <CalendarIcon className={styles.buildDateIcon} />
                              {build.date}
                            </span>
                            {build.status && (
                              <span className={clsx(
                                styles.buildStatus,
                                build.status === 'success' ? styles.buildStatusSuccess : 
                                build.status === 'failure' ? styles.buildStatusFailure : 
                                styles.buildStatusPending
                              )}>
                                {build.status === 'success' ? '构建成功' : 
                                 build.status === 'failure' ? '构建失败' : 
                                 '进行中'}
                              </span>
                            )}
                          </div>
                        </div>
                      </div>
                      <div className={styles.buildActions}>
                        <a 
                          href={build.downloadUrl}
                          className={styles.buildViewLink}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Translate>查看详情</Translate>
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
                <div className={styles.errorMessage}>
                  <ErrorIcon className={styles.warningIcon} />
                  <p>{error}</p>
                </div>
              </div>
            ) : builds.length === 0 ? (
              <div className={styles.devBuildEmpty}>
                <EmptyIcon className={styles.devBuildEmptyIcon} />
                <p><Translate>暂无可用构建信息</Translate></p>
              </div>
            ) : (
              <div className={styles.buildsContainer}>
                {builds.map(build => (
                  <div key={build.id} className={styles.buildItem}>
                    <div className={styles.buildHeader}>
                      <div className={styles.buildInfo}>
                        <div className={styles.buildName}>
                          {build.name} #{build.number}
                        </div>
                        <div className={styles.buildMeta}>
                          <span className={styles.buildBranch}>{build.branch}</span>
                          <span className={styles.buildDate}>
                            <CalendarIcon className={styles.buildDateIcon} />
                            {build.date}
                          </span>
                          {build.status && (
                            <span className={clsx(
                              styles.buildStatus,
                              build.status === 'success' ? styles.buildStatusSuccess : 
                              build.status === 'failure' ? styles.buildStatusFailure : 
                              styles.buildStatusPending
                            )}>
                              {build.status === 'success' ? '构建成功' : 
                               build.status === 'failure' ? '构建失败' : 
                               '进行中'}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                    <div className={styles.buildActions}>
                      <a 
                        href={build.downloadUrl}
                        className={styles.buildDownloadButton}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <DownloadIcon className={styles.buildDownloadIcon} />
                        <Translate>下载构建</Translate>
                      </a>
                      <a 
                        href={`https://github.com/8aka-Team/Invero/actions/runs/${build.id}`}
                        className={styles.buildViewLink}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Translate>查看详情</Translate>
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            )}
            
            <div className={styles.devBuildFooter}>
              <a 
                href="https://github.com/8aka-Team/Invero/actions"
                className={styles.viewAllButton}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Translate>查看所有构建</Translate>
                <ArrowRightIcon className={styles.viewAllButtonIcon} />
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

function VersionToggle({ activeVersion, setActiveVersion }) {
  return (
    <div className={styles.versionToggle}>
      <button
        className={clsx(styles.versionButton, activeVersion === 'stable' && styles.activeVersion)}
        onClick={() => setActiveVersion('stable')}
      >
        <div className={styles.versionButtonContent}>
          <div className={styles.versionButtonIcon}>
            <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M16.7 7.1L10 13.8L3.3 7.1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <div className={styles.versionText}>
            <Translate>稳定版</Translate>
          </div>
        </div>
      </button>
      <button
        className={clsx(styles.versionButton, activeVersion === 'preview' && styles.activeVersion)}
        onClick={() => setActiveVersion('preview')}
      >
        <div className={styles.versionButtonContent}>
          <div className={styles.versionButtonIcon}>
            <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4 5H16M4 9H16M4 13H10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <div className={styles.versionText}>
            <Translate>预览版</Translate>
          </div>
        </div>
      </button>
      <button
        className={clsx(styles.versionButton, activeVersion === 'all' && styles.activeVersion)}
        onClick={() => setActiveVersion('all')}
      >
        <div className={styles.versionButtonContent}>
          <div className={styles.versionButtonIcon}>
            <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9 5H7C5.89543 5 5 5.89543 5 7V15C5 16.1046 5.89543 17 7 17H15C16.1046 17 17 16.1046 17 15V13M9 5V3C9 1.89543 9.89543 1 11 1H15C16.1046 1 17 1.89543 17 3V13M9 5H11C12.1046 5 13 5.89543 13 7V9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <div className={styles.versionText}>
            <Translate>所有版本</Translate>
          </div>
        </div>
      </button>
    </div>
  );
}

function LoadingState() {
  return (
    <div className={styles.loadingContainer}>
      <div className={styles.loadingSpinner}>
        <svg viewBox="0 0 50 50" className={styles.spinnerSvg}>
          <circle className={styles.spinnerPath} cx="25" cy="25" r="20" fill="none" strokeWidth="4"></circle>
        </svg>
      </div>
      <div className={styles.loadingText}>
        <Translate>正在获取版本信息...</Translate>
      </div>
    </div>
  );
}

function ErrorState({ error }) {
  return (
    <div className={styles.errorState}>
      <div className={styles.errorIcon}>
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 9V11M12 15H12.01M5.07183 19H18.9282C20.4678 19 21.4301 17.3333 20.6603 16L13.7321 4C12.9623 2.66667 11.0377 2.66667 10.2679 4L3.33975 16C2.56998 17.3333 3.53223 19 5.07183 19Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
      <h3 className={styles.errorTitle}>
        <Translate>获取版本信息失败</Translate>
      </h3>
      <p className={styles.errorMessage}>{error}</p>
      <div className={styles.errorAction}>
        <a 
          href="https://github.com/8aka-Team/Invero/releases"
          className={styles.actionButton}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Translate>前往 GitHub Releases 页面</Translate>
          <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className={styles.actionButtonIcon}>
            <path d="M5 10H15M15 10L10 5M15 10L10 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </a>
      </div>
    </div>
  );
}

function EmptyState() {
  return (
    <div className={styles.emptyState}>
      <div className={styles.emptyIcon}>
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M3 12C3 4.5885 4.5885 3 12 3C19.4115 3 21 4.5885 21 12C21 19.4115 19.4115 21 12 21C4.5885 21 3 19.4115 3 12Z" stroke="currentColor" strokeWidth="2" />
          <path d="M9 9H9.01M15 9H15.01M8 14C8 14 9.5 16 12 16C14.5 16 16 14 16 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
      <h3 className={styles.emptyTitle}>
        <Translate>暂无可用版本</Translate>
      </h3>
      <p className={styles.emptyDescription}>
        <Translate>
          当前分类下没有可用的版本发布，请尝试查看其他分类或访问 GitHub 仓库获取最新信息。
        </Translate>
      </p>
      <div className={styles.emptyAction}>
        <a 
          href="https://github.com/8aka-Team/Invero"
          className={styles.actionButton}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Translate>访问 GitHub 仓库</Translate>
          <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className={styles.actionButtonIcon}>
            <path d="M5 10H15M15 10L10 5M15 10L10 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </a>
      </div>
    </div>
  );
}

export default function DownloadPage() {
  const [releases, setReleases] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [activeVersion, setActiveVersion] = useState('stable');

  useEffect(() => {
    // GitHub API 请求获取 releases
    fetch('https://api.github.com/repos/8aka-Team/Invero/releases')
      .then(response => {
        if (!response.ok) {
          throw new Error(`GitHub API 请求失败: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        setReleases(data);
        setIsLoading(false);
      })
      .catch(err => {
        console.error('获取 releases 失败:', err);
        setError(err.message);
        setIsLoading(false);
      });
  }, []);

  const { siteConfig } = useDocusaurusContext();
  
  // 筛选版本
  const filteredReleases = releases.filter(release => {
    if (activeVersion === 'all') return true;
    if (activeVersion === 'stable') return !release.prerelease;
    if (activeVersion === 'preview') return release.prerelease;
    return true;
  });

  return (
    <Layout
      title={translate({
        id: 'page.download.title',
        message: '下载 Invero',
      })}
      description={translate({
        id: 'page.download.description',
        message: '下载 Invero Minecraft GUI 插件的最新版本',
      })}>
      
      <Banner />
      
      <div className={styles.downloadContainer}>
        <div className={styles.downloadContent}>
          <div className={styles.downloadHeader}>
            <h2 className={styles.downloadTitle}>
              <Translate>版本发布</Translate>
            </h2>
            <VersionToggle 
              activeVersion={activeVersion}
              setActiveVersion={setActiveVersion}
            />
          </div>
          
          <div className={styles.downloadVersionDesc}>
            {activeVersion === 'stable' && (
              <p className={styles.versionDescription}>
                <Translate>稳定版本经过全面测试，适合用于生产环境</Translate>
              </p>
            )}
            {activeVersion === 'preview' && (
              <p className={styles.versionDescription}>
                <Translate>预览版本包含最新功能，但可能存在稳定性问题</Translate>
              </p>
            )}
            {activeVersion === 'all' && (
              <p className={styles.versionDescription}>
                <Translate>查看所有可用的版本，包括稳定版和预览版</Translate>
              </p>
            )}
          </div>
          
          {isLoading ? (
            <LoadingState />
          ) : error ? (
            <ErrorState error={error} />
          ) : filteredReleases.length === 0 ? (
            <EmptyState />
          ) : (
            <div className={styles.releaseList}>
              {filteredReleases.map(release => (
                <ReleaseCard key={release.id} release={release} />
              ))}
            </div>
          )}
          
          <DevelopmentBuildCard />
        </div>
      </div>
    </Layout>
  );
} 