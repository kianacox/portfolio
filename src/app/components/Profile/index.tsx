import Image from 'next/image';
import styles from './index.module.scss';
import Headline from '../Headline';

const Profile: React.FC = () => {
  return (
    <section data-testid="profile">
      <div className={styles.avatarContainer}>
        <Image
          alt="a picture of me"
          src="/avatar1.png"
          className={styles.profilePicture}
          width={150}
          height={200}
        ></Image>
        <h1 className={styles.name}>Kiana Cox</h1>
      </div>
      <div className={styles.profileCardContent}>
        <h2 className={styles.titles}>Titles</h2>
        <Headline />

        <h2 className={styles.about}>Summary</h2>
        <p className={styles.summary}>
          Front-End Engineer, Level 4. Specialises in React/Redux builds, critical hits in unit
          testing, and stealth refactors during code freeze. Former Sky Casino alchemist, now
          spec&rsquo;d into cross-brand code wizardry. Buffs entire squad with clean UI components
          and test coverage auras. Weak to flaky tests, resistant to Jira chaos.
        </p>
        <div className={styles.skillsContainer}>
          <h2 className={styles.strengths}>Strengths</h2>
          <ul>
            <li className={styles.strengthsItem}>
              <p className={styles.strengthsText}>
                <strong className={styles.strengthBold}>React Mastery</strong>: +10 to component
                composition, hooks, and not yelling at state.
              </p>
            </li>
            <li className={styles.strengthsItem}>
              <p className={styles.strengthsText}>
                <strong className={styles.strengthBold}>Testing Strategist</strong>: Deals double
                damage to brittle tests.
              </p>
            </li>
            <li className={styles.strengthsItem}>
              <p className={styles.strengthsText}>
                <strong className={styles.strengthBold}>Pixel-Perfect Precison</strong>: Styles UI
                with sniper-like accuracy. Can smell a misaligned button from 300px away.
              </p>
            </li>
            <li className={styles.strengthsItem}>
              <p className={styles.strengthsText}>
                <strong className={styles.strengthBold}>Party Support</strong>: Mentors allies,
                reviews PRs, and boosts team morale with moderately funny one-liners.
              </p>
            </li>
            <li className={styles.strengthsItem}>
              <p className={styles.strengthsText}>
                <strong className={styles.strengthBold}>Incident Mage</strong>: Casts grep and
                restart-service during on-call battles. Specialises in Grafana scrying and AWS
                rituals.
              </p>
            </li>
          </ul>
        </div>

        <div className={styles.weaknessesContainer}>
          <h2 className={styles.weaknesses}>Weaknesses</h2>
          <ul>
            <li className={styles.weaknessItem}>
              <p className={styles.weaknessText}>
                <strong className={styles.weaknessBold}>Delicious Baked Treats</strong>: Morale
                boost: +10. Focus debuff: also +10.
              </p>
            </li>
            <li className={styles.weaknessItem}>
              <p className={styles.weaknessText}>
                <strong className={styles.weaknessBold}>Refactor Temptation</strong>: Sees legacy
                code and hears the siren song of &quot;I could just clean this up a bit...&quot;
              </p>
            </li>
            <li className={styles.weaknessItem}>
              <p className={styles.weaknessText}>
                <strong className={styles.weaknessBold}>Overthinking</strong>: Sometimes spends more
                time naming a variable than writing the function.
              </p>
            </li>
            <li className={styles.weaknessItem}>
              <p className={styles.weaknessText}>
                <strong className={styles.weaknessBold}>Game Tunnel Vision</strong>: Finds One Game
                to Rule Them All™ and disappears into it for weeks. Will emerge with lore
                knowledge, build guides, and themed desktop backgrounds.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Profile;
