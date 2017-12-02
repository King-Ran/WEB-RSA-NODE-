const pub_key = `-----BEGIN PUBLIC KEY-----
MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAr+jAmi6MKnky+JTv3tmO
SiXAkmk2G4cLTzlCJjWvzb8QnZ3HiG9qDgBJaDlrNGdmAvUkeJxKTpMiPrySmFen
iNJ6Kt/W9VGZdd7n3mQyCO2UyVp3bJxTqWMvwXmYGYVErnZx1hio259Mq1OjAH1Q
xOwwlcmO4QfRsI8t11eWu4nF2KTW+83JxtLmX4iAJEunnUxXC58y1kqeI1AGZkBg
nFSDGaJ26gGNMZ5hNDkpNOsPJb/xMi8+PZMUBBn9UetmUMXS9yj9W4cDFHleF+PT
nad40ELoNRaUs4IXQkenyRqGCChwP/uhtfwO/wxi1z9+RxCdCztt0oKMa28VnxV3
UQIDAQAB
-----END PUBLIC KEY-----`
// const text = 'longlong';

const pri_key = `-----BEGIN RSA PRIVATE KEY-----
MIIEowIBAAKCAQEAr+jAmi6MKnky+JTv3tmOSiXAkmk2G4cLTzlCJjWvzb8QnZ3H
iG9qDgBJaDlrNGdmAvUkeJxKTpMiPrySmFeniNJ6Kt/W9VGZdd7n3mQyCO2UyVp3
bJxTqWMvwXmYGYVErnZx1hio259Mq1OjAH1QxOwwlcmO4QfRsI8t11eWu4nF2KTW
+83JxtLmX4iAJEunnUxXC58y1kqeI1AGZkBgnFSDGaJ26gGNMZ5hNDkpNOsPJb/x
Mi8+PZMUBBn9UetmUMXS9yj9W4cDFHleF+PTnad40ELoNRaUs4IXQkenyRqGCChw
P/uhtfwO/wxi1z9+RxCdCztt0oKMa28VnxV3UQIDAQABAoIBAEnBxtgfAkhgzx1p
nXYMNFwkni0FjllWc0iBkpng0tjq7vWXjW1Igehi+GSKBshPPneo/+TOa12s1aQG
f1T/E9ELp4vIlSIBV94TW5dk3ZHexA71LrPMjEuuufxelobE2TppkWuapVqI3aXM
iMEQykf3XJvBinYSSDrGngr3v8zb0pWxvDUwV6xOGcC0xiHivgdBQ74W/p8Siyi9
YrzCmPAsrLW+7KYPkJl/UUhLJ1AQaArdEMcQTE4b9Yui0V7BqKOned/pjZwoNcR/
XvROddzuRB7+F200Xam/FVlDsyN6nhMejKdwvRArmY7MNdAwDWtydAwg1gnD49tl
PBzQW70CgYEA2/Pg40H5JiR1FTmlX2vfWCbTY3lC5vKxZrOTzYoGcXam3s3IOcc+
9YlHK2mFc8h9+qrgkZErjT1kGrbXjX5ORtNWJjL1qSAHCciQ6l75pfyrnN7Omf5+
KUBGU4sebQZBwn7pKb/OOwo5QandWmN5BFITnLXuuLYpTTpDR9VK6M8CgYEAzL0H
YjeASEE/RMOPIAZdFqlysORwUdUJJgpcTErhjdw0ee59KCypSI/6xHkdrMRKMvqM
1ddRYDTwTpOooE/mpvHXVNO+yap3hlP0t58wWKggzoaC+YHv/kgjmO6l3gaknais
mmluzjGGsksddPt59O0eBcvgnCgFwi9ASRQVZd8CgYA3c1I8uMMhFIvX4AKK/dz+
kjs0lruBEaobpCYc6TEapbkH7oUN2+dJa2Rf02hreh4Ydb/Lsvdx0gpMmc/Zwf/l
5x2O38YC7yoXE1NFYtA5QmvZTmpzdC9GIwgXw7jV73/gkrIhblOFmtw4a6R8RxuZ
NT/wgAVA19uttoSDtYf/DQKBgQC10hVxkup4wIEId0du4FfhHUB+eZCKC9AhGUhY
dJOUoP91XWeGuwrnJv5DZ3AEExn15e4Wpi5dawYSMi2pmOu0TMe3TIh9ncah44NL
YrLTuRPRdUFxhYR1ZOlAEof5AhtE7BvE0WcW9IKzaePSFNZ8vetQqHtjEmPyzHWh
sJVELwKBgF9hv5dT31WngEDJLstZ8KVNG6SgHOY5d03IvUFPhEBf3ENJXw1SGiST
pQ1iKYu+UJeV8nnpgcir071mMonEXlMLeKDK0H7EndecSSZmIAKnLpne3sMM1R+S
X2WURqHeL5Kp2BLqg2J50+HnUsDFgsKfTw/IpU5EMU6RPEyJ6PRM
-----END RSA PRIVATE KEY-----`
$(function () {
    // Run a quick encryption/decryption when they click.
    $('#btn').click(function () {
        const text = $('#input').val();
        // Encrypt with the public key...
        var encrypt = new JSEncrypt();
        encrypt.setPublicKey(pub_key);
        console.time('time');
        var encrypted = encrypt.encrypt(text);
        console.timeEnd('time');
        $.post('post',
            { data: encrypted },
            function (result) {
                $("#output").html(result.data);
                console.log(result.data);
            }, 'json')

        // JSEncrypt的自解密 Demo
        // Decrypt with the private key...
        // var decrypt = new JSEncrypt();
        // decrypt.setPrivateKey(pri_key);
        // var uncrypted = decrypt.decrypt(encrypted);

        // // Now a simple check to see if the round-trip worked.
        // if (uncrypted == text) {
        //     alert('It works!!!');
        // }
        // else {
        //     alert('Something went wrong....');
        // }
    });
});